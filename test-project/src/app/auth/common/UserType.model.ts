export class UserType{
  userList = [
    {
      email: 'admin@email.com',
      password: 'admin@123',
      userType: USER_TYPE.ADMIN
    },
    {
      email: 'customer@email.com',
      password: 'customer@123',
      userType: USER_TYPE.CUSTOMER
    },
    {
      email: 'normaluser@email.com',
      password: 'normaluser@123',
      userType: USER_TYPE.NORMAL_USER
    }
  ]

  public getUsers(){
    return this.userList;
  }
}

export enum USER_TYPE{
  ADMIN = "ADMIN",
  CUSTOMER = "CUSTOMER",
  NORMAL_USER = "NORMAL_USER"
}
