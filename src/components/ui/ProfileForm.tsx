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
  const fileInputRef = useRef<HTMLInputElement>(null); // ファイル入力要素の参照
  const [username, setUsername] = useState("");
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);  // 画像プレビューの状態管理

  const handleSave = () => {
    alert(`ユーザー名「${username}」が保存されました！`);
  };
  
  // ファイル選択時の処理

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);  // プレビュー用に画像を設定
      };
      reader.readAsDataURL(file);
    }
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
                {imagePreview ? (
                <Image 
                  src={imagePreview as string}
                  alt="Profile"
                  borderRadius="full"
                  boxSize="200px"
                  objectFit="cover"
                />
              ) : (
                <MdOutlineAccountCircle size={200}/>
              )}
                </center>
                {/* ファイルアップロード */}
                
                 
                   <Button variant="outline" size="sm" onClick={() => fileInputRef.current && fileInputRef.current.click()}>
                    画像を変更する
                   </Button>
                  <input
                   ref={fileInputRef}
                   type="file"
                   accept="image/png,image/jpeg"
                   onChange={onFileSelect}
                   style={{ display: "none" }}
                  />
                
               
              {/* ユーザー名 */}
              <Field label="ユーザー名">
                <Input  placeholder="たろう"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)} />
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={handleSave}>       
            保存する
            </Button>
          </Card.Footer>
        </Card.Root>
      </Box>
    );
    
      
}
           
      
export default ProfileForm;
