import React from 'react';
import { Heading } from "@chakra-ui/react"
import { List } from "@chakra-ui/react"
import { Text ,Stack,Link} from "@chakra-ui/react"

const PrivacyPolicyPage = () => {
  return (
    <div>
        <Stack gap="2" padding={4}>
      <Heading>プライバシーポリシー</Heading>
        <Text>Memoredge（以下「当サービス」）は、お客様の個人情報を大切に考え、その保護のために適切な措置を講じています。本プライバシーポリシーでは、当サービスで収集する情報の種類、利用目的、第三者への提供について説明します。</Text>
        <Heading fontWeight="semibold">1.収集する情報</Heading>
        <Text>当サービスでは、以下の情報を収集する場合があります：</Text>
        <List.Root>
         <List.Item>Google アカウント情報</List.Item>
          <Text>当サービスは Google 認証を利用します。その際、名前、メールアドレス、プロフィール画像などの基本情報を取得する場合があります。
          </Text>
         <List.Item>アクセス情報</List.Item>
          <Text>サービスの改善のため、Google Analytics により、アクセス元、ブラウザの種類、利用時間などの匿名情報を収集する場合があります。
          </Text>
        </List.Root>
        <Heading fontWeight="semibold">2.情報の利用目的</Heading>
        <Text>収集した情報は、以下の目的で利用します：</Text>
        <List.Root >
         <List.Item>サービス提供および機能改善</List.Item>
         <List.Item>サービス利用状況の分析</List.Item>
        </List.Root>
        <Heading fontWeight="semibold">3.情報の第三者への提供</Heading>
        <Text>当サービスでは、原則として収集した情報を第三者に提供することはありません。ただし、以下の場合はこの限りではありません：</Text>
        <List.Root>
         <List.Item>法的な要請がある場合</List.Item>
         <List.Item>当サービスの権利や財産を保護する必要がある場合</List.Item>
        </List.Root>
        <Heading fontWeight="semibold">4.プライバシーポリシーの変更</Heading>
        <Text>当サービスは、必要に応じて本プライバシーポリシーの内容を変更する場合があります。重要な変更がある場合は、適切な方法で通知します。</Text>
        <Heading fontWeight="semibold">5.お問い合わせ</Heading>
        <Text>プライバシーポリシーに関する質問や疑問がある場合は、以下の連絡先までお問い合わせください：
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf_5N-msCEAXbOmsUelW9dsUZ48vAKNnquY9vRPjyrUvTeApQ/viewform?usp=dialog">お問い合わせフォーム</Link>
        </Text>
       </Stack>

      
    </div>
  );
};

export default PrivacyPolicyPage;

