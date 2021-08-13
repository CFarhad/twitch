import styled from "styled-components";

export const Stream = styled.div`
  position: relative;
  display: inline-block;
  background-color: ${props=> props.bg};
  cursor: pointer;
  margin-top: 20px;

  &:before,
  &:after {
  content: '';
  display: block;
  background-color: ${props=> props.bg};
  width: 8px;
  height: 8px;
  position: absolute;
  transition: all 0.15s ease;
}

  &:before {
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: rotate(-45deg) scale(0);
}

  &:after {
  right: 0;
  bottom: 0;
  transform-origin: bottom right;
  transform: rotate(45deg) scale(0);
}

.stream__thumbnail {
  display: block;
  transform: translate(0, 0);
  transition: all 0.15s ease;
  position: relative;
  z-index: 10;
}

.stream__thumbnail img {
  width: 100%;
  height: 100%;
}

.stream__thumbnail .live{
  position: absolute;
  top: 10px;
  left: 10px;
  background: #e91916;
  color: white;
  padding: 0 6px;
  border-radius: 0.4rem;
  font-size: 14px;
  font-weight: 600;
}

.stream__thumbnail .view{
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #00000099;
  padding: 0 6px;
  border-radius: 0.2rem;
  font-size: 14px;
  font-weight: 600;
}

  &:hover .stream__thumbnail {
  transform: translate(6px, -6px);
}

  &:hover:before {
  transform: rotate(-45deg) scale(1);
}

  &:hover:after {
  transform: rotate(45deg) scale(1);
}
`

export const StreamerInfo = styled.div`
  p{
    cursor: pointer;
  }
  p:not(:first-child){
    font-size: 13px;
    color: #adadb8;
  }
  p:hover{
    color: #9147ff;
  }
`