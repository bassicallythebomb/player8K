// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel4")
                .setDock("none")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("33.333333333333336em")
                .setHeight("50em")
                .setCaption("8K PC Player")
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.Group")
                .setHost(host,"xui_ui_group1")
                .setLeft("1.1666666666666667em")
                .setTop("14.666666666666666em")
                .setWidth("29.666666666666668em")
                .setHeight("27.5em")
                .setCaption("Playlist")
                .setToggleBtn(false)
            );
            
            host.xui_ui_group1.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview5")
                .setDirtyMark(false)
                .setItems([
                    {
                        "id":"node1",
                        "caption":"USB",
                        "iniFold":false,
                        "showMark":false,
                        "sub":[
                            {
                                "id":"node11",
                                "caption":"TKY_DOLBY_5.1.mp4",
                                "iniFold":false,
                                "showMark":true
                            },
                            {
                                "id":"node12",
                                "caption":"SSD_SUPERMAN_ATMOS.mp4",
                                "imageClass":"xui-icon-xui",
                                "iniFold":false,
                                "showMark":true
                            },
                            {
                                "id":"node13",
                                "caption":"LIVING_IN_WILD.mp4",
                                "imageClass":"fa fa-lg fa-file-video-o",
                                "iniFold":false,
                                "showMark":true
                            },
                            {
                                "id":"node14",
                                "caption":"UHD_TEST_VIDEO.mp4",
                                "iniFold":false,
                                "showMark":true
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.Group")
                .setHost(host,"xui_ui_group3")
                .setLeft("1.1666666666666667em")
                .setTop("0.5em")
                .setWidth("29.666666666666668em")
                .setHeight("13.333333333333334em")
                .setCaption("File Details")
                .setToggleBtn(false)
            );
            
            host.xui_ui_group3.append(
                xui.create("xui.UI.CheckBox")
                .setHost(host,"xui_ui_checkbox2")
                .setDirtyMark(false)
                .setLeft("10.75em")
                .setTop("9.25em")
                .setWidth("12em")
                .setCaption("HDR")
            );
            
            host.xui_ui_group3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setDirtyMark(false)
                .setLeft("10.75em")
                .setTop("0.9166666666666666em")
                .setWidth("16.666666666666668em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Filename")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_group3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setDirtyMark(false)
                .setLeft("10.75em")
                .setTop("5em")
                .setWidth("5em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Resolution")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_group3.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input8")
                .setDirtyMark(false)
                .setLeft("21.583333333333332em")
                .setTop("5em")
                .setWidth("5.833333333333333em")
                .setHeight("4em")
                .setLabelSize("2em")
                .setLabelPos("top")
                .setLabelCaption("Duration")
                .setLabelHAlign("left")
            );
            
            host.xui_ui_group3.append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image6")
                .setLeft("0.75em")
                .setTop("1.6666666666666667em")
                .setWidth("9.5em")
                .setHeight("8.833333333333334em")
                .setSrc("{xui.ini.img_pic}")
                .setCustomStyle({
                    "KEY":{
                        "background-color":"#000000",
                        "border-top":"1px",
                        "border-right":"1px",
                        "border-bottom":"1px",
                        "border-left":"1px"
                    }
                })
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setDirtyMark(false)
                .setLeft("23.75em")
                .setTop("43.083333333333336em")
                .setWidth("7.083333333333333em")
                .setHeight("2.8333333333333335em")
                .setCaption("Close")
            );
            
            host.xui_ui_panel4.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button14")
                .setDirtyMark(false)
                .setLeft("1.25em")
                .setTop("43.083333333333336em")
                .setWidth("7.083333333333333em")
                .setHeight("2.8333333333333335em")
                .setCaption("Edit")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});