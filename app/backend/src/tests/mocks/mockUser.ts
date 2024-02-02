const invalidUser = {
  id: 1,
  username: 'Admin',
  role: 'admin',
  email: 'admin@admin.com', 
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW'
}

const invalidEmail = {
  email: 'xablau@xablau.com',
  password: 'secret_admin'
}

const invalidPassword = {
  email: 'admin@admin.com',
  password: '123456'
}

const loginOk = {
  email: 'admin@admin.com',
  password: 'secret_admin',
}

export { invalidUser, invalidEmail, invalidPassword, loginOk };