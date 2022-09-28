import shortid from "shortid";

export default function decorationString(
  keywords,
  paragraph,
  hightLightColorClass
) {
  if (paragraph) {
    let keywordsArray = keywords.split(" ");
    let isManyWords = paragraph.includes(" ");
    let paraArray;
    isManyWords
      ? (paraArray = paragraph.split(" "))
      : (paraArray = paragraph.split(""));
    let result = paraArray.reduce((lastParaArrReturn, paraWord) => {
      if (keywordsArray.includes(paraWord) || keywords.includes(paraWord)) {
        let element = (
          <em className={hightLightColorClass} key={shortid.generate()}>
            {paraWord}
          </em>
        );
        let addArr;
        if (isManyWords) {
          addArr = [element, " "];
        } else {
          addArr = [element];
        }
        return [...lastParaArrReturn, ...addArr];
      } else {
        if (isManyWords) {
          return [...lastParaArrReturn, paraWord, " "];
        } else {
          return [...lastParaArrReturn, paraWord];
        }
      }
    }, []);
    return result;
  } else return null;
}
