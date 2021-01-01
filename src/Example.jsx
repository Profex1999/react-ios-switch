import React, {useEffect, useRef, useState} from 'react';

import Switch from './Switch';

const Example = () => {
    useEffect(() => {
      window.addEventListener("keyup", (event) => {
        if (event.code == 'Enter') {
          testRef.current.click()
        }
      })
    }, [])
    const [isSwitchChecked, setSwitch ] = useState(false);
    const testRef = useRef()
    return (
      <div
        style={{ margin: 50 }}
      >
          <Switch
            innerRef = {testRef}
            checked={isSwitchChecked}
            onChange={checked =>
              setSwitch(checked)
            }
          />
     </div>
    );
}

export default Example
