import React from 'react'

/**
*
* Pie de pagina pero no lo pude hacer funcionar
*/

export const footer = () => {
  return (
    <div className="container">
        
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
        <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
      </a>
      <span class="mb-3 mb-md-0 text-body-secondary">&copy; Ⓒ 2023. Starbucks Cofee Company. Reservados todos los derechos</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
      <li className="ms-3"><a className="text-body-secondary" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#linkedin"/></svg></a></li>    
    </ul>

  </footer>

</div>

  )
}
export default footer;