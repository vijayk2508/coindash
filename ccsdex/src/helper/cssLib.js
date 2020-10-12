export const cssLib = {
  title: "css library",
  props: {
    background_color: {
      name: "Background Color",
      alias: "background_color",
      //valueType: string,
      unit: null,
      designatedComponent: {
        path: "ToggleColorPicker",
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "text", "anchor", "tables", "list"],
    },
    color: {
      name: "Color",
      alias: "color",
      //valueType: string,
      unit: null,
      designatedComponent: {
        path: "ToggleColorPicker",
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "text", "anchor", "tables", "list"],
    },
    font_size: {
      name: "Font",
      alias: "font_size",
      //valueType: string,
      unit: ["px", "rem"],
      designatedComponent: {
        path: "FontSize",
        // range: [10, 100],
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "anchor", "tables", "list"],
    },
    border: {
      name: "Border",
      alias: "border",
      //valueType: string,
      unit: null,
      designatedComponent: {
        path: "Border",
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "anchor", "tables", "list"],
    },

    border_radius: {
      name: "Border Radius",
      alias: "border_radius",
      //valueType: string,
      unit: null,
      designatedComponent: {
        path: "BorderRadius",
        //  range: [10, 100],
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "anchor", "tables", "list"],
    },

    box_shadow: {
      name: "Box Shadow",
      alias: "box_shadow",
      unit: null,
      designatedComponent: {
        path: "BoxShadow",
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "anchor", "tables", "list"],
    },

    text_align: {
      name: "Text Alignment",
      alias: "text_align",
      //valueType: string,
      unit: null,
      designatedComponent: {
        path: "TextAlignment",
        //range: [10, 100],
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "anchor", "tables", "list"],
    },
    padding: {
      name: "Padding",
      alias: "padding",
      //valueType: string,
      unit: null,
      designatedComponent: {
        path: "Padding",
        //range: [10, 100],
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "anchor", "tables", "list"],
    },
    margin: {
      name: "Margin",
      alias: "margin",
      //valueType: string,
      unit: null,
      designatedComponent: {
        path: "TextAlignment",
        //range: [10, 100],
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "anchor", "tables", "list"],
    },
    font_family: {
      name: "Font Family",
      alias: "font_family",
      //valueType: string,
      unit: null,
      designatedComponent: {
        path: "FontFamily",
        //range: [10, 100],
        config: {},
      },
      primary: true,
      ComponentclassArr: ["container", "button", "anchor", "tables", "list"],
    },
  },
};
