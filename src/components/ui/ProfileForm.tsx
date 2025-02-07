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

   const handleSave = async () => {
    // APIリクエストでユーザー名を更新
    try {
      const res = await fetch("/api/user/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email: session?.user?.email, // 現在のユーザーのメールアドレスを使用
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update");
      }

      setMessage(`ユーザー名「${username}」が保存されました！`);

      // 2秒後にダッシュボードにリダイレクト
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (error) {
      console.error(error);
      setMessage("ユーザー名の更新に失敗しました。");
    }
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
