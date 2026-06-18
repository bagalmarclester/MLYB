tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            "colors": {
                "surface": "#0b1326",
                "primary-container": "#00f0ff",
                "on-surface-variant": "#b9cacb",
                "primary": "#dbfcff",
                "on-surface": "#dae2fd",
                "surface-container-low": "#131b2e",
                "surface-container-highest": "#2d3449",
                "outline-variant": "#3b494b",
                "on-primary-container": "#006970"
            },
            "spacing": {
                "margin-mobile": "16px",
                "section-gap": "120px",
                "margin-desktop": "80px",
                "gutter": "24px"
            },
            "fontFamily": {
                "headline-xl": ["Hanken Grotesk"],
                "headline-md": ["Hanken Grotesk"],
                "body-md": ["Hanken Grotesk"],
                "headline-lg-mobile": ["Hanken Grotesk"],
                "code-sm": ["JetBrains Mono"],
                "headline-lg": ["Hanken Grotesk"],
                "body-lg": ["Hanken Grotesk"],
                "label-caps": ["JetBrains Mono"]
            }
        }
    }
}