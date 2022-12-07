import React from 'react'
import { Link } from 'react-router-dom';

type Props = {}

const webHeader = (props: Props) => {
  return (
      
            <div className="bg-yellow-500 py-1 flex text-white">
              <div className="basis-3/12"><div className="float-right pr-40"><a href="/"><img src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1659795150/hfp1o0emvj2ygyz0krdm.png" width={65} height={56} /></a></div></div>
              <div className="basis-4/12 ">
                <form className="relative">
                  <input id="search" className="w-full py-2 pl-6 my-3 rounded text-black" type="text" />
                  <img className="absolute w-6 pt-2" style={{marginTop: '-49px'}} src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1654614957/search_lwjcp6.png" />
                  <button id="btnSearch" type="submit" />
                  <div id="matchlist" className="absolute top-14 left-0 text-red-500 rounded-sm">
                  </div>
                </form>
              </div>
              <div className="basis-3/12 flex ml-4 py-2">
                <div className="px-2 w-1/4">Gọi mua hàng 1800.2097</div>
                <div className="px-2 w-1/4 flex"><img className="w-7 h-7 mt-3 mr-1" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658162407/Frame_g2ogyd.png" />Cửa hàng gần bạn</div>
                <div className="px-2 w-1/4 flex"><img className="w-7 h-7 mt-3 mr-1" src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658162816/Frame_iizmu5.svg" />Tra cứu đơn hàng</div>
                <div className="px-2 w-1/4 flex ">
                  <div className="relative">
                    <a href="/cartProduct">
                      <img className="w-7 h-7 mt-3 mr-1 " src="https://res.cloudinary.com/dtd8tra0o/image/upload/v1658162893/Frame_1_sgwuzw.png" />
                      <span id="cartamount" className="absolute top-4 left-3" />
                    </a></div><a href="/cartProduct">
                    <div className="w-4">Giỏ hàng</div>
                  </a>
                </div>
              </div>
              <div className="basis-2/12 flex">
                <div id="auth" className="px-2 w-1/4 flex pl-10 mt-2" />
                <Link to="/admin" id="signout" className="px-2 w-1/4 pl-10 mt-2 ">Đăng nhập</Link>
                <button id="signout" className="px-2 w-1/4 pl-10 mt-2 hidden">Đăng xuất</button>
              </div>
            </div>
          );
  }
      
  

export default webHeader