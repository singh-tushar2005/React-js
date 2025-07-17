function customRender(reactelement, container){
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML = reactelement.children
    for (const prop in reactelement.props) {
         domelement.setAttribute(prop, reactelement.props[prop])
    }
   container.appendChild(domelement)     
}
const reactelement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
    },
    children: 'Visit Google Site'
}
const maincontainer = document.querySelector('#root')
customRender(reactelement, maincontainer)