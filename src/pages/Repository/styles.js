import styled from 'styled-components';

export const Loading = styled.div`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #7159c1;
    font-size: 16px;
    text-decoration: none;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;

export const IssueList = styled.ul`
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #eee;
    border-radius: 4px;
  }

  & + li {
    margin-top: 10px;
  }

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #eee;
  }

  div {
    flex: 1;
    margin-left: 15px;

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }

      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        line-height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }
  }
  p {
    margin-top: 15px;
    font-size: 12px;
    color: #999;
  }
`;

export const Select = styled.select`
  background: white;
  padding-left: 15px;
  margin-bottom: 10px;
  option {
    color: black;
    display: flex;
    white-space: pre;
    font-size: 12px;
    font-weight: 600;
    color: #333;
  }
`;

export const Pagination = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  button {
    border-radius: 24px;
    border: 1px solid black;

    margin: 2px;
  }
`;

export const Page = styled.div`
  height: 35px;
  width: 35px;
  border-radius: 24px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Back = styled.button.attrs(props => ({
  disabled: parseInt(props.page, 10) === 1,
}))`
  height: 35px;
  width: 35px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const Foward = styled.button`
  height: 35px;
  width: 35px;
`;
