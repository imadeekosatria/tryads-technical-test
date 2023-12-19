import { Card } from "../ui/card";
import man from "../../assets/man-pushing-dollar-coin.svg"
const Visa = ()=>{
    return (
        <Card className="bg-indigo-500 w-[27rem] relative">
            <div className="w-full h-full flex justify-center relative items-center">
              <img src={man} alt="man push dolar"></img>
            </div>
            <div className="absolute top-0 flex flex-col h-full py-4 justify-between">
              <div className="flex justify-between w-[25rem] px-4 items-center">
                <span className="text-white font-medium text-4xl">S.</span>
                <div className="w-16 fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    id="visa"
                  >
                    <path d="M13.967 13.837c-.766 0-1.186-.105-1.831-.37l-.239-.109-.271 1.575c.466.192 1.306.357 2.175.37 2.041 0 3.375-.947 3.391-2.404.016-.801-.51-1.409-1.621-1.91-.674-.325-1.094-.543-1.094-.873 0-.292.359-.603 1.109-.603.645-.01 1.096.127 1.455.269l.18.08.271-1.522-.047.01c-.387-.144-.99-.297-1.74-.297-1.92 0-3.275.954-3.285 2.321-.012 1.005.964 1.571 1.701 1.908.757.345 1.01.562 1.008.872C15.124 13.625 14.524 13.837 13.967 13.837zM22.428 8.182h-1.5c-.467 0-.816.125-1.021.583l-2.885 6.44h2.041l.408-1.054 2.49.002c.061.246.24 1.052.24 1.052H24L22.428 8.182zM20.03 12.71l.774-1.963c-.01.02.16-.406.258-.67l.133.606.449 2.027H20.03z"></path>
                    <polygon points="8.444 15.149 10.388 15.149 11.603 8.123 9.66 8.123 9.66 8.121"></polygon>
                    <path d="M4.923,12.971l-0.202-0.976v0.003L4.039,8.772C3.922,8.325,3.58,8.193,3.156,8.177H0.025L0,8.325C0.705,8.49,1.34,8.729,1.908,9.022c0.102,0.063,0.145,0.132,0.18,0.234l1.68,5.939h2.054l3.061-7.013H6.824L4.923,12.971z"></path>
                  </svg>
                </div>
              </div>
              <div className="px-4 text-white">
                <span className="font-medium">**** 9838</span>
                <div className="flex justify-between">
                  <span>Jhon Demon</span>
                  <span>08/12</span>
                </div>
              </div>
            </div>
        </Card>
    )
}

export default Visa