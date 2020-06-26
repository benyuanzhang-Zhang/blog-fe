export default function (file: string): any {
  return () => import('@/views/' + file + '.vue')
}
