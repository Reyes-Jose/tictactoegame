import React from 'react'
import './tictactoestyle.css'


export default function TicTacToe() {
    const handleClick = () =>{
        
    }
    const Cell = () => {
        return <td onClick={() => handleClick()}>-</td>
    }
  return (
    <div className='container'>
        <table>
            <tbody>
                <tr>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </tr>
                <tr>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </tr>
                <tr>
                    <Cell/>
                    <Cell/>
                    <Cell/>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
