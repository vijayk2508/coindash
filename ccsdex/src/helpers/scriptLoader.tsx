// export function addScript(id, src) {
//     let script = document.createElement('script');
//     script.setAttribute('id', 'klipfolioEmbed');
//     script.setAttribute('src', 'plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js');
//     // script.onload = function() {
//     //   let newScript = document.createElement('script');
//     //   let inlineScript = document.createTextNode('KF.embed.embedKlip({profile : "your-kilpfolio-container-key",settings : {"width": 1141,"theme":"light","borderStyle":"square","borderColor":"#cccccc"},title : "Awesome Dashboard" });');
//     //   newScript.setAttribute('id', 'klipfolioDashboard');
//     //   newScript.appendChild(inlineScript);
//       document.getElementsByTagName('body')[0].appendChild(script);
// }

interface ITagDescription {
  id: any;
  src: any;
  type: any;
}

export function addTagDynamically({ id, src, type }: ITagDescription) {
  let tag = document.createElement(type);
  tag.setAttribute("id", id);
  switch (type) {
    case "script":
      tag.setAttribute("src", src);
      document.getElementsByTagName("body")[0].appendChild(tag);
      break;
    case "link":
      tag.setAttribute("href", src);
      document.getElementsByTagName("head")[0].appendChild(tag);
      break;
    default:
      break;
  }
}

export function removeTagDynamically({ id = null }: ITagDescription) {
  //document.getElementById(`${id}`).remove();
}

export function loadScript(src:string){
  const script = document.createElement('script');
  script.src = src;
  document.body.appendChild(script);
}