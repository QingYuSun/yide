    function randomSwitchBtn( tag ) {
        var eFootLis = $api.domAll('#footer li'),
            eHeaderLis = $api.domAll('footer p'),
            err = $api.domAll('footer i'),
            index = 0;
        for (var i = 0,len = eFootLis.length; i < len; i++) {
            if( tag == eFootLis[i] ){
                index = i;
            }else{
                $api.removeCls(eFootLis[i], 'active');
                $api.removeCls(eHeaderLis[i], 'active');
                $api.cssVal(err[index],'background-position') + 27 +'px';
            }
        }
        $api.addCls( eFootLis[index], 'active');
        $api.addCls( eHeaderLis[index], 'active')
        $api.cssVal(err[index],'background-position') + 27 +'px';
    }
