import Unsplash from 'unsplash-js';
 	const unsplash = new Unsplash({

  applicationId: "7bdedbec35b243c1d98a23c45509510d3c4cede8e1df20acd7a72bb7c7da2a59",

  secret: "ae4d4b16a21c6ac745d6d945733b6d8630a5a624b9bb2fce8acea1dff8d5db04",
  
  callbackUrl: "http://brutal.oblivionmachine.com/diplom/auth"
});

const authenticationUrl = unsplash.auth.getAuthenticationUrl([
  "public",
  "write_likes"
]);

// Отправляем пользователя по этому адресу
location.assign(authenticationUrl);