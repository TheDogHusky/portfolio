import {
    themeFromSourceColor,
    argbFromHex,
    hexFromArgb,
    TonalPalette,
    Blend
} from '@material/material-color-utilities';

export const useTheme = () => {
    const currentColor = useCookie('theme-color', { default: () => '#3777ff' });
    const dark = useCookie('theme-dark', { default: () => 'true' });

    const generateCustomColor = (name: string, baseHex: string, sourceArgb: number, isDark: boolean) => {
        const harmonizedArgb = Blend.harmonize(argbFromHex(baseHex), sourceArgb);
        const palette = TonalPalette.fromInt(harmonizedArgb);

        const tones = {
            color: isDark ? 80 : 40,
            onColor: isDark ? 20 : 100,
            colorContainer: isDark ? 30 : 90,
            onColorContainer: isDark ? 90 : 10,
        };

        const Name = name.charAt(0).toUpperCase() + name.slice(1);

        return {
            [name]: palette.tone(tones.color),
            [`on${Name}`]: palette.tone(tones.onColor),
            [`${name}Container`]: palette.tone(tones.colorContainer),
            [`on${Name}Container`]: palette.tone(tones.onColorContainer),
        };
    };

    const applyTheme = (seedHex: string) => {
        if (!import.meta.client) return;

        const argb = argbFromHex(seedHex);
        const theme = themeFromSourceColor(argb);
        const scheme = dark.value === 'true' ? theme.schemes.dark : theme.schemes.light;
        let systemColors = scheme.toJSON();

        const neutral = theme.palettes.neutral;
        const surfaceContainers = {
            surfaceContainerLowest: neutral.tone(dark.value === 'true' ? 4 : 100),
            surfaceContainerLow: neutral.tone(dark.value === 'true' ? 10 : 96),
            surfaceContainer: neutral.tone(dark.value === 'true' ? 12 : 94),
            surfaceContainerHigh: neutral.tone(dark.value === 'true' ? 17 : 92),
            surfaceContainerHighest: neutral.tone(dark.value === 'true' ? 22 : 90),
        };

        const customColors = {
            ...generateCustomColor('success', '#4caf50', argb, dark.value === 'true'),
            ...generateCustomColor('warning', '#ff9800', argb, dark.value === 'true'),
            ...generateCustomColor('info', '#2196f3', argb, dark.value === 'true'),
        };

        systemColors = {
            ...systemColors,
            ...surfaceContainers,
            ...customColors
        };

        for (const [key, argbValue] of Object.entries(systemColors)) {
            const cssKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
            const hexValue = hexFromArgb(argbValue);

            document.documentElement.style.setProperty(`--color-${cssKey}`, hexValue);
        }

        currentColor.value = seedHex;
    };

    return { applyTheme, currentColor };
};