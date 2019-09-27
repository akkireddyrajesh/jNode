<h1> CMD Shortcuts </h1>
<ol>
  <li>
    <h3>How to kill in-use port (already using port)</h3>
    <ul>
      <li><p>Method: 01</p>
        <ul>
          <li>step 01:  > netstat -ano | findstr : 8603 </li>
          <li>step 02:  > taskkill /PID typeyourPIDhere /F <b>OR</b> taskkill /F /PID 2600</li>
          <li>For Ref: <a href="https://stackoverflow.com/questions/39632667/how-to-kill-the-process-currently-using-a-port-on-localhost-               in-          windows">click here </a></li>
        </ul>  
      </li>
      <li><p>Method: 02</p>
        <ul>
          <li>step 01: > netstat -a -o -n</li>
          <li>step 02:  >  taskkill /F /PID <PID No of the selected PORT></li>
          <li>Ref <a href="https://rodrigothescientist.wordpress.com/2013/07/23/kills-the-process-at-a-certain-port-in-windows-7/">click here</a></li>
        </ul>  
      </li>
    </ul>
  </li>
</ol>
