import { css } from "lit-element";

export default css`
  
  .cuerpo {
    padding-top: 36px;
  }
  
  .flexcontainer {
    display: inline-flex;
    justify-content: center;
    width: 198px;
    height: 300px;
    box-shadow: rgb(0 0 0 / 50%) 5px 5px 10px;
    transition: transform 0.3s ease 0s;
    background-image: url('https://i.pinimg.com/736x/30/6c/ab/306cabbea32dff2be9c9018ee34b3e1d.jpg');
    background-size: cover;
    background-position: center;
    margin: 3%;
  }
  
  .flexcontainer:hover {
    transform: scale(1.1);
  }
  
  .main {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    place-content: space-around center;
    background-image: url('https://pbs.twimg.com/media/E-SEdKYWEAYwQrm?format=jpg&name=4096x4096');
    background-size: contain;
    background-position: center;
  }
  
  .content {
    margin: 175px 10px 9px 10px;
    width: 170px;
    position: absolute;
  }
  
  .title {
    margin-top: 20px;
    font-size: 16px;
    line-height: 18px;
  }

  .features {
    margin-top: 5px;
    margin-bottom: 5px;
  }
    
  .detalle {
    color: #828282;
    font-size: 14px;
  }
  
  .feature {
    color: #828282;
    font-size: 14px;
    font-weight: 300;
    line-height: 18px;
  }
  
  .cover .imgcover {
    width: 142px;
    height: 180px;
  }

  .remove-button {
    font-size: 12px;
  }

  @media only screen and (max-width: 640px) {
    .main{
      margin-left: 54px;
    }

    #search{
      width: 200px;
    }
    
  }

`;
