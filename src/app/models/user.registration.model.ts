/**
 * The User Registration Model.
 * 
 * @author Kiran. Created on 04th Jan. 2020.
 */
export class UserRegistrationModel {

  constructor(
    public firstName: string = '',
    public middleName: string = '',
    public lastName: string = '',
    public userId: string = '',
    public emailId: string = '',
    public password: string = '',
    public reTypePassword: string = '',
    public address: string = '',
    public taluka: string = '',
    public district: string = '',
    public pinCode: string = '',
  ){}
}