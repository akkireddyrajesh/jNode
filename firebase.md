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
    // let token="abcdefghijklmnopqrstuvwyz";
    // let auth = await authentication(token);
    res.json(req.auth);
});


</p>
