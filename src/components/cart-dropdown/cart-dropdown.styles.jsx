import styled from 'styled-components';

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
`;

// Original SCSS below
//     .cart - dropdown - container {
//     position: absolute;
//     width: 300px; // Changed from 240px to have the button all on one line
//     height: 340px;
//     display: flex;
//     flex - direction: column;
//     padding: 20px;
//     border: 1px solid black;
//     background - color: white;
//     top: 90px;
//     right: 40px;
//     z - index: 5;

//     .empty - message {
//         font - size: 18px;
//         margin: 50px auto;
//     }

//     .cart - items {
//         height: 100 %; // Filled the height to match the container and fix button spacing
//         display: flex;
//         flex - direction: column;
//         overflow: scroll;
//     }

//     button {
//         margin - top: auto;
//     }
// }

// :: -webkit - scrollbar {
//     // Remove scrollbar
//     display: none;
// }