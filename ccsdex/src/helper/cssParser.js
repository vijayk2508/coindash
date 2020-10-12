/* eslint-disable array-callback-return */
export const cssParser = (cssProps) => {
  if (typeof cssProps === "string") {
    return {
      parseCss: function () {
        let cssPropArr = cssProps.replace(/(\r\n|\n|\r)/gm, "").split(";");
        console.log(cssPropArr);

        let cssObj = {};
        cssPropArr.map((c) => {
          if (c !== undefined && c !== "") {
            console.log(c);

            let csskeyArr = c.split(":");
            cssObj[csskeyArr[0].replace("-", "_")] = csskeyArr[1];
          }
        });
        return cssObj;
      },
    };
  }
  if (typeof cssProps === "object") {
    return {
      parseCss: function () {
        let cssPropsString = "";
        Object.keys(cssProps).map((property) => {
          cssPropsString += `${property.replace("_", "-")}:${cssProps[property]};`;
        });

        return cssPropsString;
      },
    };
  }
};
