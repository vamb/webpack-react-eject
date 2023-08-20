import React, { useState } from 'react'
import styled from 'styled-components'
import { md5FormatStr } from './utils/utils'
import axios from "axios";

function App() {
  const [ username, setUsername ] = useState(null)
  const [ password, setPassword ] = useState(null)

  const handleSubmit = () => {
    const reqParam = {
      username: username,
      password: md5FormatStr(password)
    }
    fetch('/api/user/login', {
      method: 'post',
      body: JSON.stringify(reqParam)
    }).then(res=>{
      console.log('res', res)
    }).catch(err=>{
      console.log('req err', err)
    })
    // api/user/login
  }

  const handleSubmitV2 = async () => {
    const reqParam = {
      username: username,
      password: md5FormatStr(password)
    }
    let rest = await axios.post('/api/user/login', {
      ...reqParam
    })
    console.log('handleSubmitV2 rest', rest)
  }

  return (
    <Wrapper>
      <div className="App">
        <div className={'main-content'}>
          <div>
            <div>username: </div>
            <input type={'text'} onChange={e=>setUsername(e.target.value)} />
          </div>
          <div>
            <div>password: </div>
            <input type={'password'} onChange={e=>setPassword(e.target.value)} />
          </div>
          <div>
            <button type={'submit'} onClick={()=>handleSubmitV2()}>确定</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled('div')`
  * {
    margin: 0;
    padding: 0;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    & > div {
      display: flex;
      flex-direction: row;
      gap: 10px;
      justify-content: start;
      align-items: center;
    }
  }
`

export default App;
