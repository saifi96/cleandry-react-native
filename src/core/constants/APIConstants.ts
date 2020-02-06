export const APIActionNames = Object.freeze({
    register: "register",
    login: "login",
    forgetPassword: "forget_password",
    changePassword: "change_password",
    updateProfile: "update_profile",
    allBanner: "all_banner",
    getAllServices: "get_all_services",
    getAllServicesCategory: "get_all_services_category"
});

/*
1. https://cleandry.in/api/api.php?action=get_all_services
2. https://cleandry.in/api/api.php?action=get_all_services_category
3. https://cleandry.in/api/api.php?action=register&&first_name=Robert&&last_name=Mike&&user_email=robert@yep.com&&user_pwd=12345678t&&phone=8967046923
4. https://cleandry.in/api/api.php?action=login&&user_email=robert@yep.com&&user_pwd=12345678t
5. https://cleandry.in/api/api.php?action=change_password&&id=22&&oldpass=12345&&newpass=123
6. https://cleandry.in/api/api.php?action=update_profile&&id=22&&user_email=tuhin@gmail.com&&first_name=Tuhin&&last_name=Kuili&&phone=8967046923&&zip=700106&&address=pailan hut&&city=Kolkata&&state=West Bengal
7. https://cleandry.in/api/api.php?action=top_service
8. https://cleandry.in/api/api.php?action=all_location
9. https://cleandry.in/api/api.php?action=forgot_password&&user_email=tuhinkuili@gmail.com
10. https://cleandry.in/api/api.php?action=update_payment_status&p_id=72&booking_id=TMORD2012&razorpay_payment_id=pay_DIwgV82LOxC0z1&pay_status=Success
11. https://cleandry.in/api/api.php?action=all_banner
12. https://cleandry.in/api/api.php?action=booking_history&email=suru@gmail.com&pay_status=Success
 */
