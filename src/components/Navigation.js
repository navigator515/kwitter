import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faAlignRight, faUser } from "@fortawesome/free-solid-svg-icons";
import "../css/Navigation.css";

const Navigation = ({userObj})=>(
<nav style={{display:"flex"}}>
    <ul style={{ display: "flex" , marginLeft:40, padding:10, alignItems:"center", flex:0.6,    maxWidth: 500 }}>
        <li>
        <Link to="/" style={{ marginRight: 10 }}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100" height="50" viewBox="0 0 150 55">
          <image id="ᄋ_플ᄐ_ᆨ스트로고_copy_10" data-name="위플텍스트로고 copy 10" width="150" height="55" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAA3CAYAAADuQbOpAAAAAXNSR0IArs4c6QAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAlqADAAQAAAABAAAANwAAAAB5xNw8AAATD0lEQVR4Ae1dCbAVxRV98xmDu+C+soiIRAU1GmNc4pZiEYiIuAR3YyVq1DJWNLFSqVipsmJimWgqkqoQE8UQI0FZBDFaEWKiEonggiwifKMoiIoYI2CGPzmn79zXPdubef8/lA/vWj19+/a9t3tun+nu6XkfvTAMK03a8iNwTzDpCNzl4Uj7I+2FtDvS3kj7IO2EtBvS9kjrkPa/zB/1PvJ2k99uy6bhZhEBAGZndKQf0r5R3hv5fQDGM8gNQecgMPOiYlG2HRS6IzWBVRSpzl4PYHTFPXBmOQRpP6QBSJx5Po/E2YdASFIVWKigbVnaCMWgrHKeXnPGyovMZyD/XTBxx7Di9ahUPAKIM89hSD2R+iPtgdQFqQx9kFDakChv8mITWJs8xOkG7g3G+2GlBUuXNxCpN8D0BeS9kA7zKpVd7a4XpfZRW/vMGmfVBFbjYpnraXwwblsAaTSAcyRAhP1QCwDUtj/4FvAVwseCCVqmrNJ2gyu3P59GRRNYDYzyhODOfQGgbcf41yyLuw1/AiBdByDhvxaAiBOKAoo85R7kwFlECispdj5wNYGlI1ln/kBwKzbPLX2RBgIQeJU3M9HRgID/h+Cu/mP8axdZl20HCXgEVARXBeCyQBNNgA8MAUYgKdikjuU6aNs6dDeJahNYJcI6MfgBgdFXACQgAji4se7CJYxDLiCRJQ2Q4FtYFVgAzIfUEl2dsQgcBRo9kBcSf5YnJ3WlwdWhowJpuWPXJrCc+E0KbmoBQA6FCG9lHoDjHY3UB2XsiwgNzihJELFMWAkwIpD9zyhWL7r0cZaiH1322qp2nMGsnDoKJnFiy5ngWg+t15HeQXoOaSzSZ0pbLbAeCr7TDcN3MBKWMgMkvpkdiGE7gCOiswd5O6gsKQCsXAARL1NTKQ1I7q9kKaROHFCUy14r3q7xvxT9ehsmC1FqRb4UaQnSKhyIrkS+2dBWAayHg2uwNHn4nOEdg9QHg0MQ9cQo7MKRSA4gJZxTLLgUOhZwAgy1Zb3USe6tpV8lq6tLH3Vpo3stF2iGfwP1C+D9Rei0oh8vwteKS/1zWtXn5p5vUcCaEnxrl6/5v44N6uTg21/EAM3CUPJThaEkbNJAUj0LpMi0CiCWBTDJZdB4Sy2FFni615KceyudvaI915OQDbrEvzDhQ3vQOfJOCaypweWYaTx8zvD2w9PM2ac30pEI+R4A1+MA17k2/OFxGNTt7OwjNTrQVg8eUMjXs7WWk3mHNiqTnOdTluyMpTMVcwUU9WT24jEEwPXcRf5FnRpUvKNOB6ypwWXfRb9vRsIeSYbELlpmWAdTbilcR14XKwscmbdYJ7IIEoky6xU05JVcmQsceJuFGWeZ6klOwEg72qq2xpwtCDhNzo/KnZ4+U2BND87f9Qz/j6VfjacFl/TAwPyU84TCgSMQL1WmxEcllFc5I5RhteASzYS98ccaV0904prwtgqgng/VVwGuucgXjvZv+SdtXXKBJ3NcHGR2OZRZzLXtrPwmB9aMYPRRCA5e2T3+/qcHAtsTOXhvP+Q9Aa55ANeJ4MvQ6RyS9CDrPGBqZ7qORNeFiAtEC5S0T+pxBjG2BOfr0CGIFkPyPHK8mVWWjvZv5at+ARXNWHJXUR8+KXBW+X0w4XPoXXdE4p1L/fPiN1dk/CnVx4A1MxjeZbA/bSPy7dF+VyT+fGJH3IT5qj7Yn/pm2X7NCEZhn+E9Cf2TOETuM6rQiOQnAFwnAlxPFfsOT1Bf6tHaGEkbro9bGTnbmsjFMm2vno0WQWPAA735GLlXRvk/Wy729V/zZyx9K2Tbuhy2ADRC+Ma4C/ZifKMdgLvgST8/WiM3xyR7Yj92IzTvVP3NKfcBInS28mMkbIYrXVDmxpHrPD8LEFjgQwDQq8wMRjwJcJ0GWRkCCEKAKk3xoTWlEdAqA6xTXG/OjKLiZ0f441ZrQXI+0BmaRpqC3QZoDhrp/3x23EdHS9kzFr0S9hKP6mZ+9P3B2N0BqD3R78NRx5kJ/8lRhSybtCPxU9HmSXxkvok0HKkPUi8kfP8yPx7jGc9uSNsg4f5C3v+pABc/ZRQSnr9B8gxSVcLg5lJHuakbVuTwkeDCfrDp5fogz05ZX5XYMig+tQ3qKs8a4a3MlFtH+r+YLXaNu3LGkoNV/oaOIJOkfCJHzMOzoXMS+tZd6tg32vAe1Jfp70eN62VjPRFY3DeUJN5MpRAE4iz8KnMZOHLGNpYTFNEAHzI9OLfg6ZPZzwKhamt8RPJHKY2TGYBI5IJL5TFwcuQbTgokNxegWKAlwIU+KIDiuQLM6je8uw1xSGBNQnqrvLdwaJHuo8HIPaCD72wCpnLgqnA5rEEhNviuPwsMMQpXjvDvmZt0YIFo9SlzQA0TqYNcxEknHS7XnKHgPbteZiedpWxu9SUexd0rq1fsqayGj836e9hXTYfBFSWNjod+N9h9kK8fnoo6DBLHiTelexxbVjnzaJfB5fgOpDw6WWykWjypP8q8x6QmfVVgC5xskF3rqK/cU2bSQ8H13Bb0gx4OYs0H6qfP8m8fn6mcErJNgkd6ou3WLlMr6pVGyMmjI4ouRqngwlbjd11g0IBqbMoNTcW1LLA4y3GZm2gssy9mGXTBwxDJDdqwJupPnBGc032o/+CapEu8NWJf5x2gYdZcQx+FLQdY8ZDGwaV90ha9fSYHV2Nv6W0DvSMgJYj4S4ejoHkgPOFFpkpfAlcKWO7AchZij0TGDbsbBfZHy3J3oktt2ui3Rg6B+Vi9A5gSpHdtvZcw6pCKAusJePkYiccMZYjLYQ1ghaczDEISEhsuG9ZEQ3z6BiE9kJCzyI2sEcuVrAbJcBshTxwzGHVcpD3JXSutj4GLZ21LkbrC+046HJmalcpKlRfnriflXRBpLxVA9Gh59/OP9LayAfUL0cc/F7dNDYkaPUrrlOn4kG88GWBhWVuP5Y3gKtjnVDtAAGQS3hr74+Z72slXARDPpRSX4Wa5HGYAixt3tZDwSONV+znD/fvezeqQ1VZderJStXFqAS4dCOVUS3thytxVlyTXH1vKWhYZMZnB6JQAgOb7sFyE/E2UX0LeCh0Aqu3NC/wrV5VsHH70JzrGZ3R3tGZfNg3pjEXvXA7LAmsfAPFoADK1WYYPLIMSFgknr7wBN0cRMvsEVeuG4KTeH+pPrO518LbIef8UWqgftRSZuWYcM2itPKPSF5XZ1kUi/dNeWi3RY9+tvbTu6hTzrrVEgjayOVdrtm7odWjfiFZ4MPv21/0b/qMV7c/jMdCWpFdaqnqn2HxfrUrawbjA4ga+HjoDylnAwjJIqgUuqbfDq0Pq4dyGp+uVWdQQCnGA6+GwUMKgUgsuY5txzKCazDWw2o7UxUtWxn65UGJNlq5YlLnm9Z22nL3sbAXNqef5Nz9Yxmt5HWk/eQ+2TK5KfJCZKvhDWW5PdkLqGuXk+fOjHZFYx61T9edI4JVmV4GF2WclZqFnUcNNaRkaAqVbXEXY83PEyTIMrMkDF+v0thQi1TKXw1nUIEF6Kv0oNKxdlVs5zJ+QBXBxAEvVlBa0HfHOQSVZ/6ZY7Z1bspaGK7sfNb7kHsQbr9aXtqCb+kjdqnaYs0uhfVlQp/F+sGRA9QRAxcPXvZDwsJuvMARXWRpvkOloT3P4IvZYAGnvhNKXUQaqOVgyYDJkMmxWRitbz5IOMOTDWLYUfoW8Ux9ViT3kOW+D6oF6ti3xozKbx/2LfpauI1urLRTn0o5ja0xYdmWyNLZVH/Ziv2U1tB09bLX3zdi4fYg8Hor8WKReSPwCUw+ooF7plgTWFErroOhYoWqRKMsASW05cOGZORgfsPvRZkZw9ja48eMFGBoA1qhfk9cEVjxoElDzXBofrh/1LzrahrWvAEjhC0jjILsBnbiSPSlHth3rz7ZjZXpQWs5rea0koLQdyqUftg/a1/LeMzQ/iT0dWA4XYBZaDsXeGcpZIi6H7llOtL9yVdlRGUrehC58okG51tscUi6Hi1GHp8bb1dVRi8gekQn/Inz+lUGjd+mHcuJJS9IGNYz2O1DmscO/kPhaz4304jP9se+j3A6SVtQwfg8iFRmvHOzGkoCGd0hAyV8TsQW2Judh5HjnGgXKpZZcO4i/WkgR3w6vS0mzBYMAxBYAsg05P+Mck63GwGpHFVzUVLmbU+7xxeB2pOOydBxwzjnD/9N7tMgn8Z0FLtrEg2nO8sZA9tgI/zfr8n3WV5PVtrQbbz1eqq+N2toEK6OmB6xsKQ4wRonEGpKUtSSyeq4dBRZmkwrf4v6GdBpSjZ4oeKCFbgs4hLfDq+bmzRA6YX9q1gDXDHqoTTZkdoDVQnw719YR/m8na23jcrkL+tPekNc7I68k84aWGpPL5p27Hs5YjEKST/fF9o1c3eQn91j0QJCsqcPV0Eg3sb9KeZiAsDpAsMG24WbYTeh9fMi+EYUBDINQOsct1zi/isxMpn7ZpuvH8lbu2jWKd9unz3hZ2rayRrVq/cieSl4OGAN3b0Veysl+xMvWWwnOT81YWNYCLGscsPNLOKAKZywS3yJqEYFyJIIaAVGeCXkeeAsMrD4dhr9NBkCeMYGh6ph8Jb4r1jhm0K7EbCBUQGubqmdaz3rQrEIONzm4qj+sD0I6Ft77QO2hkf4vnU9e7IMluXNbJpcli2u0v4Q7xbdPgkd/TKg5W9UjCNYz1naJZItOv3AT3scQMfEogjfFfD0Sj5m0DmzlzhSwKAXx2KEssPoCiKOg35OGObQRgF0BPef3TuwXu03iYOtAW5m9LallWbfhMHrUmBZcaEGSKzkbqgyO0c2lKcEVCCD/BN/rCyXsJ71D0PMByHtoC+LT4+t5FVixXhvv9m6lscgKBdtPqWnMte0jjSD6GkXAWw8QrQbg8KLivQN+DdpehdkLvIdPSfyjWw8rV8ta9O4D1P0XfQGIPAKJIArx19e53c0DFmesACmvHlVV2hPcvUg7VCVp5h8UAVw8hF0OtreosF8MKskFF8uUa73NRWqupYBFT7V820E3PnkxNC24dGf06DD042AIDIgQ8EMB7L1Ew+mJEUiZLLjUC4VtR6wjvRSQqh2wah3mLvCveuH+4Ff4VSpPzFuWA0yrBEhtay72L+dP0RtOmcABANYAAE+htVNKtlgLVHRBoCpxNrxWCxY8lCi4hE+Di3Lz7OHXDN4TLBUTQSlkLDOG0g6612tacDH2gt6+sBiIgehmrdWH9NgtKRgcXYelJovSupaYk2grylVuW1PR4MsF/tWTGuyyprtaewoeOzSKXGBl+HXHgeBSUrnmlBv+maH+pJIvGGrLXH3HZfRKcKF+OyRsAcxpfzfRz9U1/qijSfqtZYirpDLJpS1W2nLUPmXrqmadmKkFLM4sjaAVmAHnOY5mg8/49akGn5oKAOF51UGI+BmSl73SN8kOpPBWJm3G9YyJ6UtaTiAkAWJ9qL54gB4BK4VUHyjnP7Yf/hvAxE+GwtsixU6dZS6FvCOA4TUshy+DxT6jQxQ7GYdffes8L9srA81nX8HF4VMZLQz/GLkyJNbiT/0yV6+uLN2mbUE9WIlwabnxndgahOscvZWwfANpPjTxzxKFL4JfcpZ/xzLxuGVcc4EV3R5nrY4CK2uTzeUwB1hsOQ4kCwMOT2XFEP/h58mUIwEoPQrpEItXytJ1Fm5xzsIxX25aeUva0mt4E7gH0PIK9Oblkf5dG7RmS82LgDUFN/79Dtw8X9+zNtlcygreOvPAlfcT5Fq9JLhcUKiugCxeFweegE5lhJPwGfIlmH0WwfPT0LpbW2B+pn83ZyimrYZqAgvL1hwsh5y6925nRP4OH6lNNmRr4Xc2fJ5W228WuCrt2F8JGCyALFC0fVunEuaZ0k9QwQ/TC9C7BeD5ofo1/AX2UuRNiiJQE1iRziPIv9HOiM2sYcfZsABYtI6BC/82Q9ljBrdl9SEzF33aBdKCzMKoKuMhIUAUvgj9hbCbC6/Lhvv3JpY6t60mzwhsamBl7a808txn3aWF2jmBQfKeHexPSc2AUpd3DfGbLgWKzWVhtGWAhkvVEkjmobUlsAGIwtZh/v11tpfXj61LXgZY/LOq9Uj1HtzxmGF+XjhR9zqWwxdQPzBPJy0PawE1rS4S7OXsjAURT5oXAzhLAa65mIleRf08lFvxL95sklPovI5tyfJCYAEAHwMA3IAPqzMQsWOGHFsuh3UAK3aCn+MyLgZ42Ab/Qdt3kePV3nsJfwX0dlyrWWp0BAqBFTXIZateYJXZZPO3Tz8seVMfAuRYnuqjIf5D/DXo9+qzamp3NAK1Tt5d39PdQgmev2L4a5EegIIlqPRfFF9f5K9Zv/lEoBSwAAC+BdUzW8yBTdnfh49LhIOfexYhcTYbi3QD0nHwdw/yJnWSCJRdCnk7PHY4uuR9ERRl6UdQfAWJs1wr0mKAaC3yJnXiCHhl/2fj2MD3wX3WOgTkwSFnG85s5wIcHyFv0lYagdLAYnwArjHIjkdag8RZZTUSf1lIQDGtBqCWI2/SVh6B/wOUaznQXx1KaAAAAABJRU5ErkJggg=="/>
         </svg>
         </Link>       

        </li>
        <li>
          {/* <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" /> */}
          <h2 style={{marginLeft:40, fontSize:18, fontWeight:10}}>커뮤니티</h2>
        </li>

        <li>
          {/* <FontAwesomeIcon icon={faTwitter} color={"#04AAFF"} size="2x" /> */}
          <h2 style={{marginLeft:40, fontSize:18, fontWeight:10}}>위플마켓</h2>
        </li>
     </ul>

        <ul style={{ flex:0.4 ,marginTop:30, alignItems:"center", display:"flex",marginLeft:150}}>

       
        <li style={{marginRight:20}}>
        <Link
          to="/profile"
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faUser} color={"#b3fb60"} size="2x" />
          <span style={{ marginTop: 10 ,marginLeft:20}}>
            {userObj.displayName
              ? `${userObj.displayName}의 Profile`
              : "Profile"}
          </span>
        </Link>       
         </li>
         <li >
           <h2>| 로그아웃</h2>
         </li>
         <li style={{ marginLeft:5}}>
           <h2>| 고객센터</h2>
         </li>
    </ul>
    
</nav>
    )
export default Navigation;