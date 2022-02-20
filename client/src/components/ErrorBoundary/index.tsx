import type {Dispatch} from 'redux'
import type {InitialState as ErrorState} from 'store/reducers/error'
import type {HideErrorNotificationAction} from '@store/actions/model';
import {Component, ErrorInfo, ReactNode} from 'react'
import {connect} from 'react-redux'
import {Snackbar, Alert} from '@mui/material';
import {hideErrorNotification} from 'store/actions/error'

interface Props {
    errorMessage: string | null,
    hideErrorNotification: () => void,
    children: ReactNode
}

interface State {
    error: null | Error
    errorInfo: null | ErrorInfo
    hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            error: null,
            errorInfo: null,
            hasError: false,
        }
    }

    static getDerivedStateFromError(error: Error) {
        console.log(error)
        return {
            hasError: true,
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        })
    }

    render() {
        if (this.state.hasError) {
            return (
                <>
                    <h1>Something went wrong.</h1>

                    {process.env.NODE_ENV === 'development' && (
                        <details style={{whiteSpace: 'pre-wrap'}}>
                            {this.state.error?.toString()}
                            <br/>
                            {this.state.errorInfo?.componentStack}
                        </details>
                    )}
                </>
            )
        }

        return (
            <>
                <Snackbar
                    open={!!this.props.errorMessage}
                    autoHideDuration={3000}
                    onClose={this.props.hideErrorNotification}
                >
                    <Alert onClose={this.props.hideErrorNotification} severity="error" sx={{width: '100%'}}>
                        {this.props.errorMessage}
                    </Alert>
                </Snackbar>

                {this.props.children}
            </>
        )
    }
}

const mapStateToProps = ({error}: { error: ErrorState }) => ({
    errorMessage: error.errorMessage,
})

const mapDispatchToProps = (
    dispatch: Dispatch<HideErrorNotificationAction>,
) => ({
    hideErrorNotification: () => dispatch(hideErrorNotification()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary)