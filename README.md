## AUTH!!

1. We need a form to be able to log in. This form should make a POST request to '/api/v1/auth' with params of username and password
2. When we get back the response, we want to save the token someplace
  + probably into out `sessionStorage` using `sessionStorage.setItem`
3. Every additional request should send along the token that we've saved in our sessionStorage as a header called 'Authorization'
4. On the client side, when a component goes to mount, we should make sure that we have that token saved in session storage before it renders. If we don't, the user should be redirected to the login form
