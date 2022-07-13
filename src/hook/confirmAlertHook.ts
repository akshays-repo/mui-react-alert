import create from 'zustand'

interface BearState {
  show: boolean
  buttonCancelLabel: string
  buttonConfirmLabel: string
  title: string
  subtitle?: string
  handleClose: () => void
  onConfirmation: () => void
  onCancel: () => void
  showConfirmarion: (rops: THandleOpen) => void
}

type THandleOpen = {
  buttonCancelLabel: string
  buttonConfirmLabel: string
  title: string
  onConfirmation: () => void
  onCancel?: () => void
  subtitle?: string
}

export const useConfirmationStore = create<BearState>()((set) => ({
  show: false,
  buttonConfirmLabel: 'Yes',
  buttonCancelLabel: 'No',
  title: '',
  subtitle: '',
  onCancel: () => null,
  onConfirmation: () => null,
  handleClose: () =>
    set(() => ({
      show: false,
      buttonConfirmLabel: 'Yes',
      buttonCancelLabel: 'No',
      title: '',
      subtitle: '',
      onCancel: () => null,
      onConfirmation: () => null
    })),
  showConfirmarion: (props: THandleOpen) =>
    set(() => ({
      show: true,
      onConfirmation: props.onConfirmation,
      onCancel: props.onCancel,
      title: props.title,
      subtitle: props.subtitle
    }))
}))

export const showAlertConfirmarion =
  useConfirmationStore.getState().showConfirmarion
