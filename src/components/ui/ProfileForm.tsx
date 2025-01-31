"use client";
import { useState, useEffect } from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Button, Card, Input, Stack, Box ,Image, Text,Center} from "@chakra-ui/react";
 import { Field } from "@/components/ui/field";
 import { useSession } from "next-auth/react";
 import { useRouter } from "next/navigation";  // 追加


export const ProfileForm = () => {
  const { data: session } = useSession();
  const router = useRouter();  // 追加
  
  const [username, setUsername] = useState<string>("");
  const [imagePreview,setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [message, setMessage] = useState<string>(""); // メッセージを表示するための状態
  

  useEffect(() => {
    if (session?.user) {
      setUsername(session.user.name || "");
      setImagePreview(session.user.image || null);
    }
  }, [session]);

  const handleSave = () => {
    // ユーザー名を保存後、メッセージを表示
    setMessage(`ユーザー名「${username}」が保存されました！`);

    // 少し待ってからダッシュボードにリダイレクト
    setTimeout(() => {
      router.push("/dashboard");  // ダッシュボードページにリダイレクト
    }, 2000);  // 2秒後にリダイレクト（保存メッセージが見れる時間を確保）
  };

  return (
     <Center>
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
               {/* ユーザー名 */}
              <Field label="ユーザー名">
                <Input  placeholder="たろう"
                 value={username}
                 onChange={(e) => setUsername(e.target.value)} />
              </Field>
            </Stack>
          </Card.Body>
          <Card.Footer display="flex" justifyContent="flex-end" gap={2}>
          <Stack gap={4} width="full">
            <Button onClick={handleSave}>       
            保存する
            </Button>
              {/* 保存メッセージ */}
             {message && (
               <Box mt={4} textAlign="center">
              <Text color={"green.400"}>{message}</Text>
               </Box>
              )
              }
          </Stack>
          </Card.Footer>
        </Card.Root>
      </Center>

    
    );
    
      
}
           
      
export default ProfileForm;
