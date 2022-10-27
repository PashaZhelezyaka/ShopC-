export interface ResponseLogin {
  kind: string,
  localId: string,
  email: string,
  displayName: string,
  idToken: string,
  registered: boolean,
  refreshToken: string
  expiresIn: string
}

export interface UserLoginAdmin {
  email: string,
  password: string,
  returnSecureToken: boolean
}

export interface Product {
  type: string,
  name: string,
  photo: any,
  information: any,
  price: number
}
