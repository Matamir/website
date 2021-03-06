const ProjectListItem = (project) => {

  // This conditional make it so the cant load image icon doesn't come up if no image is provided.
  var imageHTML = ""
  if(project.projectImage !== ""){
    imageHTML =
          `<div class="column">
            <img src=${project.projectImage} class="img-fluid" alt="Responsive Image" style="width:384px;">
          </div>`
  }
  return(`
      <div class="container my-5">
        <div class="row">
          ` + imageHTML +
          `
        </div>
        <div class="row pt-1">
          <div class="column"><p class="font-weight-bold pr-3">${project.projectName}</p> </div>
          <div class="column"><p class="font-italic pr-5">${project.projectLanguages}</p></div>
          <div class="column"><p class="font-weight-light pl-5">${project.projectTimeline}</p></div>

            
            
           
            <div>${project.projectDescription}</div>
           <br>
        </div>
      </div>
      `);
}
export default ProjectListItem;