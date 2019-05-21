<h2>Firebase Notes</h2>
<h3></h3>
<table>
<tr>
  <td>Angular + Firebase + Typescript — Step by step tutorial</td>
  <td>https://medium.com/factory-mind/angular-firebase-typescript-step-by-step-tutorial-2ef887fc7d71</td>
</tr>
  <tr>
    <td>Angular firebase with cloud store</td>
    <td>https://medium.com/factory-mind/angular-cloud-firestore-step-by-step-bootstrap-tutorial-ecb96db8d071</td>
  </tr>
  <tr>
    <td>Angular2 + firebase </td>
    <td>https://medium.com/@coderonfleek/firebase-firestore-and-angular-todo-list-application-d0fe760f6bca</td>
  </tr>
</table>
<h2>firebase authentication</h2>
<p>
//-------------- firebasefunctions starts----------
var authenticationCheck = async(token) => {
    // idToken comes from the client app
    return await admin.auth().verifyIdToken(token)
        .then(function(decodedToken) {
            var uid = decodedToken.uid;
            console.log(`fn_authentication() ${JSON.stringify(decodedToken)}`);

            return { status: true, data: decodedToken };
            // ...
        }).catch(function(err) {
            console.log(`err @ fn_authentication() ${JSON.stringify(err)}`);
            return { status: false, data: err };
            // Handle error
        });
}
var authGaurd = async(req, res, next) => {
    let token = req.body.token;
    if (!token) return res.send('token misplaced');

    let auth = await authenticationCheck(token);
    if (!auth.status) return res.send(auth);
    //authentication successfull
    req.auth.uid = auth.uid;
    req.auth.email = auth.email;
    next();
}

app.get('/auth', [authGaurd], async function(req, res, next) {
    // let token="eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyZjBiNDZjYjc1OTBjNzRmNTNhYzdhOWUwY2IxYzAzMjRlY2RkNzUiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc2VudHJ5LXNwYS1zYW5kYm94IiwiYXVkIjoic2VudHJ5LXNwYS1zYW5kYm94IiwiYXV0aF90aW1lIjoxNTU4NDQxNzc4LCJ1c2VyX2lkIjoibjdVeDRPT0RkNloxNU1aMnlwandkWGJhak5BMiIsInN1YiI6Im43VXg0T09EZDZaMTVNWjJ5cGp3ZFhiYWpOQTIiLCJpYXQiOjE1NTg0NDE3ODEsImV4cCI6MTU1ODQ0NTM4MSwiZW1haWwiOiJ0ZXN0MjEwNTA1QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0MjEwNTA1QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.JSVuWiJ6OdyufPGaANlwERCR0lqCjbK3amayO5OiIEyqXV1n1DOXTfP0d6TZfOUWkC3m0HZYGkdbXuglJga6ljBBulbBh8imTMyKfAcnJ0M4Rm-qoEimYXgjsRIFWffZ0DmMJ6xOdPuw-dXuuOzD-hfJwzO3x2T_7R8D_5QeRzDVgy-aXzP_sU9ZD8TsTap9de2mFHbqPnb_1_2vaTAxo_eCF_9bw0nkKFWX36Ld1Zrq3AgDNp71JUdmGKPRHkQClDDyGs8KjTIOYTAfeY5NKV9C_eittloAKggdAdOTJ6TE6KW3W9ctz7Hr6B4F8X9fzQlhxtOwt1tLMBrcTYAVvw";
    // let auth = await authentication(token);
    res.json(req.auth);
});

//-------------- firebasefunctions ends----------

</p>
