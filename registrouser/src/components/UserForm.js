function UserForm(){
    return(
    <>
    <form>
        <input type="text" placeholder="name" name="name"/><br/>
        <input type="text" placeholder="email" name="email"/><br/>
        <input type="submit" name="btnSubmit"/>
    </form>
    </>
    );
}

export default UserForm;