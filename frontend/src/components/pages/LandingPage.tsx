import React from 'react'
import { Button } from '../ui/button'
import chess_board_light from '../../assets/chess_board_light.png'
// import chess_board_dark from '../../assets/chess_board_dark.png'
import chess_logo_left from '../../assets/logo_left.png'
import chess_logo_right from '../../assets/logo_right.png'
// import { useTheme } from '../theme-provider'

const LandingPage:React.FC = () => {
  // const { theme } = useTheme();
  return (
    <div className="max-w-[1440px] h-full pt-10 bg-bg_landing_light dark:bg-bg_landing_dark bg-fixed bg-right bg-no-repeat bg-[length:439px_480px] flex flex-col items-center justify-center pr-[350px] gap-10" style={{ backgroundImage: `url(${chess_board_light})`, backgroundPosition: 'right bottom' }}>
      <div>
        <div className='flex flex-row items-center justify-center'>
          <div>
            <img src={chess_logo_left}></img>
          </div>
          <div>
            <img src={chess_logo_right}></img>
          </div>
        </div>
        <h1 className='text-[80px] pl-1'>
          Chessmania
        </h1>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <Button variant={'primary'} size={'xl'}>Play Class</Button>
        <p className='text-[50px]'>
          Like Never Before
        </p>
      </div>
    </div>
  )
}

export default LandingPage
