import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Input from '@/components/common/Input'

export default function LoginPage() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-semibold text-white">Welcome to Gipsy</h2>
        <p className="mt-2 text-sm text-slate-300">Sign in to access your workspace.</p>
        <div className="mt-6 space-y-3">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
          <Button className="w-full">Sign in</Button>
        </div>
      </Card>
    </div>
  )
}
