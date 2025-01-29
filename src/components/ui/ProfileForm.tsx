"use client";
import { useState,useRef } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Button, Card, Input, Stack, Box ,} from "@chakra-ui/react";
import {
    FileUploadList,
    FileUploadRoot,
    FileUploadTrigger,
 } from "@/components/ui/file-upload";
 import { Field } from "@/components/ui/field";
 import { Image } from "@chakra-ui/react"


export const ProfileForm = () => {
  const [username, setUsername] = useState("");
  const handleSave = () => {
    alert(`ユーザー名「${username}」が保存されました！`);
  };
  return (
     <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <Card.Root maxW="sm" boxShadow="lg" borderRadius="md" bg="amber.50">
          <Card.Header>
            <center>
            <Card.Title>プロフィール編集画面</Card.Title>
            </center>
            <Card.Description>
             Fill in the form below to edit your profile.
            </Card.Description>
          </Card.Header>
          <Card.Body>
            <Stack gap={4} width="full">
                {/* プロフィールの写真 */}
                <center>
                <MdOutlineAccountCircle size={200} />  
                </center>
                {/* ファイルアップロード */}
                <FileUploadRoot accept={["image/png"]} maxFiles={1} >
                 <FileUploadTrigger >
                   <Button variant="outline" size="sm">
                      Upload file
                    </Button>
                  </FileUploadTrigger>
                    <FileUploadList showSize clearable/>              
                    </FileUploadRoot>
                
               
              {/* ユーザー名 */}
              <Field label="ユーザー名">
                <Input  placeholder="たろう"/>
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
            <Button>       
                保存する
            </Button>
          </Card.Footer>
        </Card.Root>
      </Box>
    );
    
      
}
           
      
export default ProfileForm;
