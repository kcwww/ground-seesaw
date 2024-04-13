import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useModal } from '@/lib/hooks/useModal';
import s3Upload from '@/lib/s3/s3upload';

const SubmitModal = () => {
  const { onClose, isOpen, type, props } = useModal();

  if (type !== 'Submit') return null;
  console.log(props);

  const postData = async () => {
    const { images, description, nickname, password } = props.data as any;
    console.log(images, description, nickname, password);
    try {
      const { uploadImg } = s3Upload();
      const imgUrls = await uploadImg(images.map((img: any) => img.file));
      console.log(imgUrls);
    } catch (error) {
      console.error('Error uploading image', error);
    }
  };

  return (
    <AlertDialog open={isOpen && type === 'Submit'}>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>포스팅 전 확인해주세요 !</AlertDialogTitle>
          <AlertDialogDescription>
            민감한 정보를 포함한 게시물은 삭제될 수 있습니다. <br /> 수정 및
            삭제를 원하시는 경우 입력한 비밀번호를 꼭 기억해주세요.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            onClick={() => {
              onClose();
            }}
          >
            닫기
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={async () => {
              onClose();
              await postData();
            }}
          >
            포스팅
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SubmitModal;
