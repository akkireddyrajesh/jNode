<h1> CMD Shortcuts </h1>
<ol>
  <li>
    <h3>How to kill in-use port (already using port)</h3>
    <ul>
      <li>step 01:  > netstat -ano | findstr :yourPortNumber <b>(OR)</b> > netstat -a -o -n</li>
      <li>step 02:  > taskkill /PID typeyourPIDhere /F <b>OR</b> taskkill /F /PID 2600</li>
      <li>For Ref: <a href="https://stackoverflow.com/questions/39632667/how-to-kill-the-process-currently-using-a-port-on-localhost-in-windows">click here </a></li>
    </ul>  
  </li>
</ol>
