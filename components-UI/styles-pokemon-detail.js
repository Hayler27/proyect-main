import { css } from "lit-element";

export default css`
.main {
  display: block;
  background-image: url('https://pbs.twimg.com/media/E-SEdKYWEAYwQrm?format=jpg&name=4096x4096');
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 100vh;
  overflow: auto;
  padding: 20px; 
  box-sizing: border-box;
}

.flexcontainer {
    display: inline-flex;
    justify-content: center;
    width: 300px;
    height: 320px;
    box-shadow: rgba(0, 0, 0, 0.5) 5px 5px 10px;
    margin: 36px 36px 0px 20px;
    transition: transform 0.3s ease 0s;
    background-image: url('https://i.pinimg.com/736x/30/6c/ab/306cabbea32dff2be9c9018ee34b3e1d.jpg');
    background-size: cover;
    background-position: center;}

    .evolutions {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      background-image: url(https://pbs.twimg.com/media/E-SEdKYWEAYwQrm?format=jpg&name=4096x4096);
      background-size: cover;
      background-position: center center;
      box-sizing: border-box;
      padding: 20px 20px 50px;
  }

    .flexcontainer:hover {
        transform: scale(1.1);
    }

    .content {
        margin: 220px 20px 20px 42px;
        width: 143px;
        position: absolute;
    }

    .title {
        font-size: 16px;
        line-height: 18px;
    }

    .back {
        display: flex;
        justify-content: center;
        margin-top: 15%;
    }

    .back button {
        background-color: white;
        border: 1px solid #000;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        text-transform: uppercase;
    }

    .back button:hover {
        background-color: #000;
        color: #fff;
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
        height: 200px;
    }
}
`;
