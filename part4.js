function password(objet){
    
    let capitalSiteName=objet.siteName[0].toUpperCase()
    + objet.siteName.slice(1)
    let passwordString= capitalSiteName+ '#' + objet.
    name + '@' + objet.birthYear
    return passwordString ;
}

console.log(
password({ name: 'ovisack', birthYear:2024,
    siteName:'googl'

})




)