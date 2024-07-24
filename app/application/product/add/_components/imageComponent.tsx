import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
import type { GetProp, UploadFile, UploadProps } from 'antd';
import { useState } from 'react';
import { AddProductTabContentProps } from '../_types';
import { Button } from '@nextui-org/react';

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

const getBase64 = (file: FileType): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });

type Props = AddProductTabContentProps

const ImageComponent = (props: Props) => {
  // handles logo upload
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [logoFile, setLogoFile] = useState<UploadFile[]>([]);

  const handlePreview = async (file: UploadFile) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }
    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
  };
  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
    setLogoFile(newFileList);

  return (
    <div>
      <h3 className='text-xl font-medium mb-2'>Images</h3>
      <Upload
        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
        listType="picture-circle"
        fileList={logoFile}
        onPreview={handlePreview}
        onChange={handleChange}
        maxCount={8}
      >
        <button type="button">
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Select Image</div>
        </button>
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: 'none' }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(''),
          }}
          src={previewImage}
        />
      )}

      <Button className='bg-primary-orange rounded px-6 mt-10 self-start'>
        Save & Proceed
      </Button>
    </div>
  )
}

export default ImageComponent