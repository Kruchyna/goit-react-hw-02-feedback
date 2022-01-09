import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  max-width: 450px;
  min-width: 320px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
`;

export const StatisticsTitle = styled.h2`
  font-size: 1.2em;
  text-align: center;
`;

export const ListButton = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const ListButtonItem = styled.li`
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.spacing(4)};
  }
`;

export const ListFeedback = styled.ul`
  padding-left: 20%;
  list-style: none;
`;

export const FeedbackItem = styled.li`
  text-transform: capitalize;
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

export const Button = styled.button`
  width: 80px;
  border-radius: ${({ theme }) => theme.spacing(4)};
  border: ${({ theme }) => `1px solid ${theme.colors.primaryColor}`};
  padding: ${({ theme }) => theme.spacing(2)};
  text-transform: capitalize;
  color: inherit;
  transition: ${({ theme }) => `color ${theme.timing} ${theme.timingFunction}`},
    ${({ theme }) => `background-color ${theme.timing} ${theme.timingFunction}`};

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.reverseColor};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`;

export const Value = styled.span`
  font-size: 1.2em;
  font-weight: 700;
`;

export const Message = styled.p`
  text-align: center;
`;
