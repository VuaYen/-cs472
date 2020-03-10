let create=(function () {
   name;
   deposit;
    /**
     * Set the local variables.
     * @param {int} n name.
     * @param {int} d deposit.
     */
    function setValues(n,d) {
       this.name=n;
        this.deposit=d;
    }
    return {
        createAccount:function () {
            setValues(document.getElementById("name").value,
                deposit=document.getElementById("deposit").value);},
        getName: function() {
                return name;
            },
        getDeposit: function () {
            return deposit;
         }

        };
}());
let accountInfoList={
        AccountInfo:function () {
        document.getElementById("listr").value += ("Account Name: "+create.getName()+
            " Balance: "+create.getDeposit()+"\n");
    }
};
document.getElementById("createac").onclick=function() {
    create.createAccount();
    accountInfoList.AccountInfo();
};