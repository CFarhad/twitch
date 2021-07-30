import React , {useState} from 'react';
import {InputGroup,Input,InputRightElement,IconButton,Menu,MenuButton,MenuList,MenuItem} from '@chakra-ui/react';
import {BsSearch,BsX} from 'react-icons/bs'
import {FaHistory} from 'react-icons/fa'
import Colors from '../../Theme/Colors';
import "./Index.css"


function Index() {
  const [focus,setFocus] = useState(false)

  let ChangeEvent = (e)=>{
    if(e.target.value.length > 0){
      setFocus(true)
    }
    else{
      setFocus(false)
    }
  }
  return (
    <div className="searchBox">
      <InputGroup size="md" >
        <Input pr="4.5rem" className="searchInput" type="text" placeholder="Search" onChange={(e)=>ChangeEvent(e)} focusBorderColor={Colors.primary.purple} />
        <InputRightElement zIndex={8}>
          <IconButton  icon={<BsSearch size={20} />} disabled={!focus} className="searchBtn"/>
        </InputRightElement>
        <div >
        <Menu isOpen={focus} >
      {( {isOpen} ) => (
          <MenuList w="350px" style={{marginTop:"45px",zIndex:"1"}} >
            <MenuItem className="recently__search" >
              <div style={{color: "#9147ff",display:"flex",alignItems:"center",fontSize:"16px"}}>
                <FaHistory style={{marginRight:"10px"}} />
                Rainbow six siege
              </div>
              <IconButton icon={<BsX size={25} />} className="remoteBtn" onClick={()=>console.log("hello")} />
            </MenuItem>
          </MenuList>
      )}
      </Menu>
        </div>
      </InputGroup>
    </div>
  );
}

export default Index;
