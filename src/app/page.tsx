import TextEditorForm from '@/components/TextEditorForm'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Rich Text Editor</h1>
      <div>
        <TextEditorForm />
      </div>
    </div>
  )
}
