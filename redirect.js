 /*document.location.href = "../blog";*/
 if(location.protocol == 'http:') {
  location.replace(location.href.replace(/http:/, 'https:'));
}